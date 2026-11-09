# Lesson 0.3: How machines learn

**Your first model, trained on real penguin data**

| Video | Lesson post | Quizzes | Homework | Notebook |
|---|---|---|---|---|
| [Watch on YouTube](https://www.youtube.com/watch?v=-Ct6_TzkdGw) | [Read on Substack](https://datalyceum.substack.com/p/lesson-03-how-machines-learn) | [Before](quiz-pre.md) · [After](quiz-post.md) | [assignment.md](assignment.md) · [Solutions](solutions.md) | [first-model.ipynb](first-model.ipynb) (optional) |

## What you will be able to do

- Explain features, labels and a model, using a real dataset.
- Explain why we test a model on data it has never seen.
- Tell supervised from unsupervised learning, and regression from classification.

**Before you start:** [lesson 0.2](../02-what-is-data).

## Key ideas

- **Rules vs learning.** Instead of writing the rules ourselves, we show the computer examples with the right answers, and it finds the rule.
- **Features and label.** The features are what we know (bill length, flipper length). The label is the answer we want to predict (the species).
- **Training.** An algorithm looks at the examples and builds a **model**: a rule it learned from the data.
- **Testing.** We keep some examples hidden during training and score the model on them afterwards. It is like an exam with new questions, not the ones you practised on.
- **Overfitting.** A model that memorises the training examples, noise included, scores well in training and worse on new data. We want a model that learns the pattern, not one that memorises.
- **Types of learning:**
  - **Supervised** learning has labels. Predicting a number is **regression**. Predicting a category is **classification**.
  - **Unsupervised** learning has no labels. Grouping similar things together is **clustering**.

## On real data

Can we tell a penguin's species from two measurements? We used 342 penguins (the two with no measurements are left out). We trained a small model on 256 of them and kept 86 hidden for the test.

- The first rule the model learned: **flipper longer than 206.5 mm means Gentoo**. That one rule alone is right for about 98% of the penguins on the Gentoo-or-not question.
- With one more rule on bill length, it separates Adelie from Chinstrap too.
- This small model got **84 of the 86 hidden penguins right (98%)**. One miss is a Chinstrap 0.15 mm under the bill line; the other is a Gentoo with an unusually short bill.
- A model allowed to grow as big as it likes got 100% on the training penguins but only 95% on the hidden ones. That is overfitting, on a real dataset.

You can check every number yourself in [first-model.ipynb](first-model.ipynb).

## Where this lives in Azure

| Task | Azure service |
|---|---|
| Train, track and deploy your own models | Azure Machine Learning |
| Let Azure try many algorithms for you | Automated ML in Azure Machine Learning |
| Build a training flow by drag and drop | Designer in Azure Machine Learning |
| Use a ready-made model instead of training one | Microsoft Foundry |

**Exam link:** these ideas were part of Azure AI Fundamentals (AI-900), which retired on 30 June 2026. Its replacement, AI-901, focuses on generative AI. See [exam-maps](../../../exam-maps).

## Homework

[assignment.md](assignment.md). Then check yourself with the [after-lesson quiz](quiz-post.md).

**Next:** Season 1 starts with lesson 1.1: Dirty data.
