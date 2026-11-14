# How ChatGPT works, at three levels

ChatGPT explained three times, each time a level deeper. Start with the level that fits you and move up when you're ready.

| Level | What you get | Length | Video |
|---|---|---|---|
| 1, Basic | The big picture. No maths, no code. | 3 min | Out Nov 16 |
| 2, Intermediate | Tokens, embeddings, attention, temperature | 5 min | Out Nov 17 |
| 3, Advanced | Queries, keys and values, layers, training, Azure | 7 min | Out Nov 18 |

Notes on the website: [datalyceum.com/levels/how-chatgpt-works](https://datalyceum.com/levels/how-chatgpt-works/)

## Level 1: explained simply

- ChatGPT reads your words and guesses what comes next. Not the whole answer, just the next word. Then it adds that word and guesses again.
- It got good at guessing by reading a huge amount of text and playing one game billions of times: hide the next word, guess it, check, adjust.
- After that, people rated its answers, and it learned to give the kind they preferred.
- It gives the answer that sounds most likely. Usually that's also true. Not always, so check any fact that matters.

**Try this:** ask a chatbot to finish "penguins live in" five times. Do you get the same answer every time? Level 2 explains why not.

## Level 2: tokens and attention

1. **Tokens.** The text is split into tokens, whole words or pieces of words. In English a token is about three quarters of a word, so 1,000 tokens is roughly 750 words.
2. **Numbers.** Each token becomes a long list of numbers, its embedding. Similar meanings get nearby addresses.
3. **Attention.** Every token looks at the others and decides which ones matter. In "the penguin dived because it was hungry", *it* pays the most attention to *penguin*.
4. **Picking.** Every token gets a probability, and the temperature decides how adventurous the pick is.

Training happens in two stages, pre-training and then fine-tuning with human rankings. The model sees a limited number of tokens at once, its context window.

**Try this:** paste a paragraph into a free online tokenizer and count the tokens.

## Level 3: under the hood

- Each token ID picks a row from a learned embedding table. GPT-3's biggest version used 12,288 numbers per token. Positions are added so word order counts.
- Each token makes a query, a key and a value. Query times key (a dot product), divided by the square root of the vector length, then softmax, gives the attention weights. The output is the weighted mix of the values.
- A GPT token only looks at the tokens before it.
- Several heads, then a feed-forward network, make one layer. GPT-3 had 96 layers and 175 billion parameters.
- The last vector becomes a score for every token in the vocabulary (about 50,000 in GPT-3, about 200,000 in newer OpenAI models). One token is picked and the model runs again.
- The loss measures surprise and gradient descent reduces it. Reinforcement learning from human feedback comes after.
- It makes things up because training rewards the likely token, not the true one. RAG, sources and a low temperature help.
- On Azure: Microsoft Foundry deployments, pay per token, content filters, and Azure AI Search for RAG.

**Try this:** in the Foundry playground, or any chatbot playground, ask the same question at temperature 0 and at temperature 1, and compare.

## Sources

- Vaswani and others (2017), [Attention Is All You Need](https://arxiv.org/abs/1706.03762).
- Brown and others (2020), [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165), the GPT-3 paper.

ChatGPT and GPT are trademarks of OpenAI. Microsoft, Azure and Microsoft Foundry are trademarks of the Microsoft group of companies. Datalyceum is independent and not affiliated with either.
