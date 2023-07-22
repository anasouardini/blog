import { OpenAIApi, Configuration } from "openai";

const config = new Configuration({
    apiKey: "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",
    organization: "org-M7UGN73zVetoUhkLMXfzTGtA"
});

const openai = new OpenAIApi(config);
// const response = await openai.listEngines();

const response2 = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "user", "content": "hello"}
    ],
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
}).then((res)=>{
    console.log(res.data.choices);
})