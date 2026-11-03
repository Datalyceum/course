# Lesson 0.1: The Map

**AI vs machine learning vs data science vs big data**

| Video | Lesson post | Quizzes | Homework |
|---|---|---|---|
| [Watch on YouTube](https://www.youtube.com/watch?v=zhgfQalHFfs) | [Read on Substack](https://datalyceum.substack.com/p/lesson-01-the-map) | [Before](quiz-pre.md) · [After](quiz-post.md) | [assignment.md](assignment.md) |

## What you will be able to do

- Tell AI, machine learning, deep learning and generative AI apart, and say how they fit inside each other.
- Explain what data science and big data are, and how they feed AI.
- Name the main Azure service for each part of the map.

**Before you start:** nothing. This is the first lesson. Take the [3-question quiz](quiz-pre.md) to see where you are.

## Key ideas

- **Data science** answers questions with data: collect it, clean it, explore it, chart it and explain what it means. A lot of data science needs no AI at all. Careful counting and a good chart answer many real questions.
- **Big data** is data too big, too fast or too varied for one machine. We call these the three Vs: **volume** (how much), **velocity** (how fast it arrives) and **variety** (how many shapes it comes in). Engines like Apache Spark split the work across many machines.
- **Artificial intelligence (AI)** is the broad goal: computers doing tasks that normally need human intelligence. It is the biggest circle on the map.
- **Machine learning** is one way to reach that goal. Instead of writing rules by hand, we show the computer examples with answers, and it learns the pattern.
- **Deep learning** is machine learning with neural networks of many layers. It drives image recognition, speech and language.
- **Generative AI** sits inside deep learning. It doesn't just predict, it creates new text, images, code or audio. **AI agents** use a language model to plan steps and use tools to get a task done.
- **How it all connects:** data science and big data prepare the data, machine learning learns from it, and AI is what people use at the end.

## A real example

Think about predicting the price of an apartment.

- **With rules:** someone writes "price = 10,000 per square metre, plus 50,000 for each bedroom". It is quick, but it ignores everything the rule-writer forgot.
- **With machine learning:** we give the computer thousands of sold apartments with their size, rooms, location and final price. It learns how each of these affects the price, including patterns no one wrote down.

Predicting a number like this is called **regression**. Predicting a category, like "spam" or "not spam", is called **classification**.

## Where this lives in Azure

| Part of the map | Azure service | What it does |
|---|---|---|
| Data science | Microsoft Fabric | One place for data: storage, notebooks, pipelines and Power BI reports |
| Big data | Azure Databricks | Runs Apache Spark at large scale |
| Machine learning | Azure Machine Learning | Trains, tracks and deploys machine learning models |
| Generative AI and agents | Microsoft Foundry | Lets you pick, test and build with AI models and agents |

We open each of these for real in the hands-on track.

**Exam link:** Azure AI Fundamentals (AI concepts) and Azure Data Fundamentals (core data concepts). See [exam-maps](../../../exam-maps).

## Homework

[assignment.md](assignment.md). Then check yourself with the [after-lesson quiz](quiz-post.md).

## Go further

- Lesson 1 of Microsoft's free [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners) course.

**Next lesson:** [0.2 What is data?](../02-what-is-data)
