import NewBotResponse from "./components/WebChat/NewBotResponse/NewBotResponse";
import ConversationEntry from "./components/WebChatNavigation/ConversationEntry";

const App = () => {
  return (
    <div>
      <NewBotResponse />
      <ConversationEntry
        intentNameRasa={"start_intro_session"}
        intentNameUI={"Start Intro Session"}
      />
      <ConversationEntry
        intentNameRasa={"start_f_skill"}
        intentNameUI={"Start F Skill"}
      />
      <ConversationEntry
        intentNameRasa={"start_i_skill"}
        intentNameUI={"Start I Skill"}
      />
      <ConversationEntry
        intentNameRasa={"start_r_skill"}
        intentNameUI={"Start R Skill"}
      />
      <ConversationEntry
        intentNameRasa={"start_s_skill"}
        intentNameUI={"Start S Skill"}
      />
      <ConversationEntry
        intentNameRasa={"start_t_skill"}
        intentNameUI={"Start T Skill"}
      />
      <ConversationEntry
        intentNameRasa={"start_closing_session"}
        intentNameUI={"Start Outro Session"}
      />
    </div>
  );
};

export default App;
