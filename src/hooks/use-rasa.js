import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import useHttp from "./use-http";
import { chatHistoryActions } from "../store/chat-history-slice";

const getParsedMessages = (data) => {
  var parsedMessages = [];
  const messages = getMessages(data);
  for (const message of messages) {
    const text = getText(message);
    const buttons = getButtons(message);
    if (text) {
      parsedMessages.push({ text: text });
    }
    if (buttons.length > 0) {
      parsedMessages.push({ buttons: buttons });
    }
  }
  return parsedMessages;
};

const getMessages = (data) => {
  if (data.hasOwnProperty("messages")) {
    return data["messages"];
  }
  return null;
};

const getText = (messagesPart) => {
  if (messagesPart.hasOwnProperty("text")) {
    return messagesPart["text"];
  }
  return null;
};

const getButtons = (messagesPart) => {
  var buttonsData = [];
  if (messagesPart.hasOwnProperty("buttons")) {
    const buttons = messagesPart["buttons"];
    buttons.map((button) => {
      buttonsData = [
        ...buttonsData,
        { title: extractTitle(button), payload: extractPayload(button) },
      ];
      return null;
    });
  }
  return buttonsData;
};

const extractTitle = (button) => {
  if (button.hasOwnProperty("title")) {
    return button["title"];
  }
  return null;
};

const extractPayload = (button) => {
  const payload = {};
  if (button.hasOwnProperty("payload")) {
    const tokenizedPayload = tokenizePayload(button["payload"]);
    payload["name"] = getIntentName(tokenizedPayload);
    payload["entities"] = getEntities(tokenizedPayload);
    return payload;
  }
  return null;
};

const tokenizePayload = (payload) => {
  const payloadTokens = payload
    .substring(1)
    .replace(/{/g, " ")
    .replace(/:/g, " ")
    .replace(/}/g, " ")
    .replace(/"/g, " ")
    .replace(/,/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .split(" ");
  return payloadTokens;
};

const getIntentName = (tokenizedPayload) => {
  if (tokenizedPayload.length > 0) {
    return tokenizedPayload[0];
  }
  return null;
};

const getEntities = (tokenizedPayload) => {
  var entities = {};
  if (tokenizedPayload.length > 0) {
    for (let i = 1; i < tokenizedPayload.length; i += 2) {
      const attribute = tokenizedPayload[i];
      const value = tokenizedPayload[i + 1];
      entities[attribute] = value;
    }
  }
  return entities;
};

const useRasa = () => {
  const dispatch = useDispatch()
  const [responses, setResponses] = useState([]);
  const { isloading, error, sendRequest } = useHttp();

  const updateResponses = (data) => {
    const parsedMessages = getParsedMessages(data);
    setResponses(parsedMessages);
  };

  useEffect(() => {
    if (responses.length > 0) {
      for (const response of responses) {
        response.hasOwnProperty("text") &&
          dispatch(chatHistoryActions.addNewAlfieMessage(response));
        response.hasOwnProperty("buttons") &&
          dispatch(chatHistoryActions.addNewUserMessage(response));
      }
    }
  }, [responses, dispatch]);

  const injectIntent = async (payload) => {
    sendRequest(
      {
        url: "http://localhost:5005/conversations/default/trigger_intent",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      },
      updateResponses
    );
  };

  return { responses, isloading, error, injectIntent };
};

export default useRasa;
