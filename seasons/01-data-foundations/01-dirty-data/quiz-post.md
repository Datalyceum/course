# Lesson 1.1: quiz after the lesson

**1. A female Adelie penguin's body mass is missing. Which fill value is usually the best choice?**

- A) 0
- B) The median of all penguins (4,050 g)
- C) The median for female Adelie penguins (3,400 g)
- D) The heaviest penguin's weight

**2. The same penguin appears in both the training set and the test set. What happens to the test score?**

- A) It looks better than it really is
- B) It looks worse than it really is
- C) Nothing changes

**3. The outlier rule flags a body mass. You check it, and it belongs to a real, unusually large male Gentoo. What should you do?**

- A) Delete it, because the rule flagged it
- B) Replace it with the median
- C) Keep it, because it's real

<details>
<summary>Show answers</summary>

1. C. Typical weights differ a lot between groups. The overall median would be too heavy for a female Adelie.
2. A. The model has already seen that penguin's answer, so the test is no longer a test on new data.
3. C. An outlier is a question, not an automatic delete. Fix typos you can confirm, remove impossible values, keep real ones.

</details>
