# Lesson 0.1: homework solutions

Try the [homework](assignment.md) first. The Stretch and Challenge have no single right answer, so below you'll find worked examples to compare with yours, not an answer key.

## Core

The answers to the [after-lesson quiz](quiz-post.md) are at the bottom of the quiz, under **Show answers**:

1. **B, machine learning.** The program learns from emails that already have the right answer (spam or not spam). Learning a category from labelled examples is classification.
2. **A, volume, velocity and variety.** How much data, how fast it arrives, and how many shapes it comes in.
3. **C, Microsoft Foundry.** That's where you choose ready-made AI models and build apps and agents on them. Databricks and Fabric are mainly for data, and Data Lake Storage keeps files.

## Stretch: four problems placed on the map

Here are four everyday problems and where they sit. Notice that the question is "what is the main job?", not "which tools are involved?".

| Problem | Where it sits | Why |
|---|---|---|
| A small shop wants to know which products sell best on weekends. | **Data science** | It's a question answered by counting sales and drawing a chart. No model needs to learn anything. |
| A bank wants to flag card payments that look like fraud, a moment after they happen. | **Machine learning**, running on **big data** | The model learns what fraud looks like from past payments that were marked as fraud or not. Millions of payments arrive every hour, so the data side is big data (volume and velocity). |
| A hospital wants to spot signs of pneumonia in chest X-rays. | **Deep learning** | Images are unstructured data. Neural networks with many layers are the usual way to learn from pictures. |
| A support team wants first drafts of replies to customer emails. | **Generative AI** | The system creates new text. If it also looks up each customer's order before writing, it becomes an **agent**. |

Two things people often get wrong here:

- **Using a lot of data doesn't make it big data.** A few years of sales from one shop fits in a spreadsheet. It only becomes big data when one machine can't keep up.
- **Using a prediction doesn't always mean machine learning.** If someone writes the rule by hand ("flag any payment over 5,000 abroad"), it's a rule-based system, even if it's useful.

## Challenge: one idea explained differently

Example answer, based on lesson 1 of Microsoft's [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners):

> Our map draws data science as one circle that overlaps with AI, with big data underneath as the plumbing. Microsoft's lesson treats data science as a wide, interdisciplinary field, and lists databases, big data, machine learning, AI and visualisation as fields it draws on. It also counts collecting, storing and processing data as part of data science. Both views are fair. Ours separates the jobs so you can tell them apart; theirs shows how much one data scientist may touch in practice.

Other ideas from that lesson you could pick: the idea of data science as a "fourth paradigm" of science, after experiments, theory and computer simulation, and the difference between digitalisation (putting a process on computers) and digital transformation (using that data to change how a business works).

## Think about it

**A spam filter that learns from examples sits in the machine learning circle.** It learns from labelled examples (spam or not spam), so it's classification, a kind of supervised learning. Lesson 0.2 opens with this answer.

Questions about these solutions? Ask in the [Lesson 0.1 homework thread](https://github.com/datalyceum/course/discussions/3).
