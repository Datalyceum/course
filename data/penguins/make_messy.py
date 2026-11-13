"""Builds penguins-messy.csv from penguins.csv for lesson 1.1: the real data plus deliberate,
documented problems. See the "penguins-messy.csv" section of README.md for the list.

Run from this folder: python make_messy.py
"""
from pathlib import Path

import pandas as pd

here = Path(__file__).parent
df = pd.read_csv(here / "penguins.csv")
m = df.copy()

# Labels written in different ways (spreadsheet rows 32, 122, 252)
for idx, val in [(30, "adelie"), (120, "Adelie "), (250, "Gentoo penguin")]:
    m.at[idx, "species"] = val

# Typos with an extra zero (rows 77 and 159)
idx = df.index[(df.species == "Adelie") & (df.body_mass_g == 4250)][1]
m.at[idx, "body_mass_g"] = 42500
idx = df.index[(df.species == "Chinstrap") & (df.flipper_length_mm == 198)][0]
m.at[idx, "flipper_length_mm"] = 1980

# Zeros used for "not measured" (rows 62 and 202)
for idx in [60, 200]:
    m.at[idx, "body_mass_g"] = 0

# Exact duplicates of rows 17, 97, 182 and 282, added at the end (rows 346 to 349)
m = pd.concat([m, m.loc[[15, 95, 180, 280]]], ignore_index=True)

m["flipper_length_mm"] = m["flipper_length_mm"].astype("Int64")
m["body_mass_g"] = m["body_mass_g"].astype("Int64")
m.to_csv(here / "penguins-messy.csv", index=False)
print(len(m), "rows written")
