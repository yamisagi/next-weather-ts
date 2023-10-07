import { OpenAI, ClientOptions } from 'openai';

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
const ORGANIZATION = process.env.NEXT_PUBLIC_AI_ORG;

const options: ClientOptions = {
  apiKey: OPENAI_API_KEY as string,
  organization: ORGANIZATION as string,
};

const openai = new OpenAI(options);



const getWeatherMessage = async (data: any) => {
  const { description, temperature, feels_like } = data;
  const input = `Weather is ${description}. Temperature is ${temperature} and feels like ${feels_like} degrees. What should I do?`;
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: input }],
    model: 'gpt-3.5-turbo',
    user: 'user',
    max_tokens: 150,
  });
  console.log(chatCompletion);
  return chatCompletion;
};
