# Lesson 0.2: What is data?

**Rows, columns and types, with real penguin data**

| Video | Lesson post | Quizzes | Homework | Notebook |
|---|---|---|---|---|
| [Watch on YouTube](https://www.youtube.com/watch?v=nUc_-USKENU) | [Read on Substack](https://theaimasteryacademy.substack.com/p/lesson-02-what-is-data) | [Before](quiz-pre.md) · [After](quiz-post.md) | [assignment.md](assignment.md) | [explore-penguins.ipynb](explore-penguins.ipynb) (optional) |

## What you will be able to do

- Read a real table: say what a row, a column and a cell are, and give its shape.
- Tell numerical data from categorical data, and nominal from ordinal.
- Tell structured, semi-structured and unstructured data apart, and name where each lives in Azure.

**Before you start:** [lesson 0.1](../01-the-map).

## Key ideas

- **Data is recorded facts about the world.** A temperature reading, a receipt, a photo and a message are all data.
- **Data, information, insight.** One number tells you little. Many numbers in order give you information. The right question turns information into an insight. Data science is the work of moving up those three steps.
- **Rows are observations, columns are variables.** In the penguins table, one row is one penguin and one column is one thing measured about every penguin. Each cell holds one value.
- **Shape** is rows by columns. The penguins table is 344 by 7.
- **Types of variables:**
  - Numerical, continuous: measured, can take any value (bill length, body mass).
  - Numerical, discrete: counted, whole numbers only (rooms in an apartment).
  - Categorical, nominal: labels with no order (species, island).
  - Categorical, ordinal: labels with an order (small, medium, large).
  - Also common: dates and times, and free text.
- **You average numbers and you count categories.** The penguins weigh about 4.2 kg on average. Counting species gives 152 Adelie, 124 Gentoo and 68 Chinstrap.
- **Three shapes of data:** structured (tables), semi-structured (JSON, logs) and unstructured (photos, audio, video, free text). Most of the world's data is unstructured.
- **Where data comes from:** people, machines, transactions and open data.

## Five questions for any new dataset

1. What is one row?
2. What's the shape?
3. What type is each column?
4. What's missing or strange?
5. Where did it come from, and who collected it?

## The dataset

[Palmer Penguins](../../../data/penguins): 344 penguins of three species, measured by scientists at Palmer Station in Antarctica between 2007 and 2009, shared freely under CC0.

## Where this lives in Azure

| Kind of data | Azure service |
|---|---|
| Tables | Azure SQL Database |
| Files of any kind (CSV, photos, video) | Azure Blob Storage, or Azure Data Lake Storage for analytics |
| JSON documents | Azure Cosmos DB |
| All of them together, for analysis | Microsoft Fabric |

**Exam link:** Azure Data Fundamentals (core data concepts). See [exam-maps](../../../exam-maps).

## Homework

[assignment.md](assignment.md). Then check yourself with the [after-lesson quiz](quiz-post.md).

**Next lesson:** [0.3 How machines learn](../03-how-machines-learn)
