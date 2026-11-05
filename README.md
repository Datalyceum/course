# Datalyceum

**A free course that takes you from zero to a solid understanding of AI, data science and big data, and shows where each idea runs in the real world on Microsoft Azure.**

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/datalyceum/course)

**[Course website](https://datalyceum.com/)** · [Lessons on Substack](https://datalyceum.substack.com) · [Videos on YouTube](https://www.youtube.com/@datalyceum) · [Start here](https://datalyceum.substack.com/p/start-here) · [Discussions](https://github.com/datalyceum/course/discussions)

## Start here

1. Read the [Start here page](https://datalyceum.substack.com/p/start-here). It takes two minutes.
2. Begin with [Lesson 0.1: The Map](seasons/00-orientation/01-the-map), even if you already know some AI.
3. Star this repository to keep track of new lessons.

## How each lesson works

| Step | Where | What you get |
|---|---|---|
| 1. Watch | YouTube | A whiteboard video of about 10 minutes, built on real data |
| 2. Read | Substack | The key diagram, short notes and where the idea lives in Azure |
| 3. Check | This repo | A 3-question quiz before and after the lesson |
| 4. Practise | This repo | Homework in three levels: Core, Stretch and Challenge |
| 5. Share | Discussions | Post your homework, ask questions, help others |

A new lesson comes out every week. Short videos during the week recap one idea each. Solutions to homework are added one week after each lesson, so you get a fair chance to try first.

## Lessons

| # | Lesson | Video | Lesson post | Materials |
|---|---|---|---|---|
| 0.1 | The Map: AI vs machine learning vs data science vs big data | [Watch](https://www.youtube.com/watch?v=zhgfQalHFfs) | [Read](https://datalyceum.substack.com/p/lesson-01-the-map) | [Open](seasons/00-orientation/01-the-map) |
| 0.2 | What is data? Rows, columns and types, with real penguin data | [Watch](https://www.youtube.com/watch?v=nUc_-USKENU) | [Read](https://datalyceum.substack.com/p/lesson-02-what-is-data) | [Open](seasons/00-orientation/02-what-is-data) |
| 0.3 | How machines learn: your first model, explained without code | Coming soon | Coming soon | [Open](seasons/00-orientation/03-how-machines-learn) |

## Learn AI with Pictures

A side series: one AI idea in one picture, with a 40-second video. The pictures are in [pictures/](pictures) and on the [website](https://datalyceum.com/pictures/).

| # | Picture | Video |
|---|---|---|
| 1 | [Programming vs machine learning](pictures/01-programming-vs-machine-learning) | [Watch](https://youtube.com/shorts/JSz5A8qPGu8) |

## The course map

The course has two tracks. First the theory, then the hands-on track on real Azure. The full episode list is in [seasons/README.md](seasons/README.md).

| Season | Topic | Lessons | Where it lives in Azure | Status |
|---|---|---|---|---|
| 0 | Orientation: the big picture | 3 | Where each Azure service fits | In progress |
| 1 | Data foundations | 6 | Azure SQL Database, Power BI in Microsoft Fabric | Coming |
| 2 | Big data | 5 | Azure Data Lake Storage, Microsoft Fabric, Azure Databricks | Coming |
| | First look lab: Python and your first AI model call | 2 | GitHub Codespaces, Microsoft Foundry | Coming |
| 3 | Machine learning | 7 | Azure Machine Learning | Coming |
| 4 | Deep learning | 5 | Azure Machine Learning, Microsoft Foundry | Coming |
| 5 | Language, vision and documents | 4 | Microsoft Foundry tools | Coming |
| 6 | Generative AI and agents | 6 | Microsoft Foundry, Azure AI Search | Coming |
| 7 | Production and responsible AI | 4 | Azure Machine Learning, Microsoft Purview, Azure Monitor | Coming |
| | Hands-on track: four Azure lab tracks | about 24 | See [labs](labs) | Later |

The seasons line up with Microsoft certifications. See [exam-maps](exam-maps) for which lessons prepare you for which exam.

## Run the notebooks

Most theory lessons need no code. Some have an optional notebook for the Challenge level.

- **In your browser:** click **Open in GitHub Codespaces** above. Everything is installed for you. GitHub gives personal accounts a free monthly allowance of Codespaces hours.
- **On your computer:** install Python 3.12, then run `pip install -r requirements.txt` and open the notebook in VS Code or Jupyter.

## What's in this repository

```
course/
├── seasons/          lessons, one folder each: notes, quizzes, homework, notebooks
├── labs/             the hands-on Azure track (later), plus cost and cleanup rules
├── data/             small open datasets used in the lessons, with their licences
├── exam-maps/        which lessons prepare you for which Microsoft exam
├── cheatsheets/      one diagram a week, free to save and share
├── site/             the course website (datalyceum.com)
└── .devcontainer/    the setup for GitHub Codespaces
```

## Community

- Ask questions and post homework in [Discussions](https://github.com/datalyceum/course/discussions).
- Found a mistake? Open an [issue](https://github.com/datalyceum/course/issues/new/choose). See [CONTRIBUTING.md](CONTRIBUTING.md).
- Please never post keys, passwords, subscription IDs or tenant IDs anywhere.

## Licence and credits

- Code is under the [MIT License](LICENSE).
- Lesson text, quizzes, diagrams and images are under [CC BY-NC-SA 4.0](LICENSE-CONTENT.md).
- Datasets keep their own licences. See [CREDITS.md](CREDITS.md).

This is an independent project, not affiliated with or endorsed by Microsoft. Microsoft, Azure and related product names are trademarks of the Microsoft group of companies.
