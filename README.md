# Passive to Active Voice

This project translates passive voice into active voice.

## Motivation

My friend Fatima [asked me to build this](https://twitter.com/sugaroverflow/status/1615483762934153221) so I did 🤷‍♂️.

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

Video and blog post coming soon on how to build apps with OpenAI and Vercel Edge functions!

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Credit

- Feels weird crediting myself lol but I built it using code from [twitterbio](https://github.com/Nutlope/twitterbio)
