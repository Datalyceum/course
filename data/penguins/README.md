# Palmer Penguins

`penguins.csv` has 344 rows (one per penguin) and 7 columns. `penguins-messy.csv` is a practice copy with problems added on purpose, for lesson 1.1 (see below).

| Column | Type | Meaning |
|---|---|---|
| species | categorical, nominal | Adelie, Chinstrap or Gentoo |
| island | categorical, nominal | Biscoe, Dream or Torgersen |
| bill_length_mm | numerical, continuous | bill length in millimetres |
| bill_depth_mm | numerical, continuous | bill depth in millimetres |
| flipper_length_mm | numerical, continuous | flipper length in millimetres (recorded as whole numbers) |
| body_mass_g | numerical, continuous | body mass in grams (rounded to the nearest 25 g) |
| sex | categorical, nominal | MALE or FEMALE |

Missing values are empty cells. Two penguins have no measurements, and 11 penguins (those two included) have no value for sex.

Counts: 152 Adelie, 124 Gentoo, 68 Chinstrap.

## penguins-messy.csv

A practice copy for [lesson 1.1: Dirty data](../../seasons/01-data-foundations/01-dirty-data). It starts from `penguins.csv` and adds problems on purpose, so you can find and clean them. Use the real file for everything else.

It has 348 rows. Row numbers below are spreadsheet rows, with the header as row 1.

| Row | Column | Real value | Messy value | Problem |
|---|---|---|---|---|
| 32 | species | Adelie | adelie | label written in lower case |
| 122 | species | Adelie | `Adelie ` | label with a space at the end |
| 252 | species | Gentoo | Gentoo penguin | label written a different way |
| 77 | body_mass_g | 4250 | 42500 | typo, an extra zero |
| 159 | flipper_length_mm | 198 | 1980 | typo, an extra zero |
| 62 | body_mass_g | 3150 | 0 | zero used for "not measured" |
| 202 | body_mass_g | 3250 | 0 | zero used for "not measured" |
| 346 to 349 | all | | copies of rows 17, 97, 182 and 282 | duplicate rows |

Everything else is the same as in `penguins.csv`, including its 2 penguins with no measurements and 11 with no value for sex. The script that made the file is [make_messy.py](make_messy.py).

## Source and licence

The data was collected by Dr. Kristen Gorman and the Palmer Station Long Term Ecological Research (LTER) program in Antarctica, between 2007 and 2009. It is available under the CC0 licence (no rights reserved), in line with the Palmer Station LTER Data Policy.

Please cite:

- Horst AM, Hill AP, Gorman KB (2020). palmerpenguins: Palmer Archipelago (Antarctica) penguin data. https://allisonhorst.github.io/palmerpenguins/
- Gorman KB, Williams TD, Fraser WR (2014). Ecological sexual dimorphism and environmental variability within a community of Antarctic penguins (genus Pygoscelis). PLoS ONE 9(3): e90081. https://doi.org/10.1371/journal.pone.0090081

This copy of the file comes from the [seaborn-data](https://github.com/mwaskom/seaborn-data) repository.
