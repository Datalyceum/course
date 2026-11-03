# Azure costs and cleanup

Read this once before your first lab. It takes two minutes and can save you real money.

## Which account to use

- **Azure free account:** a starting credit for your first 30 days, some popular services free for 12 months, and some services that are always free. A card is needed to sign up. When the credit runs out, paid services stop unless you upgrade to pay-as-you-go.
- **Azure for Students:** for full-time students at an eligible university. A smaller credit and no card needed.

Offers change, so check the current terms on the Azure website before you sign up.

## Five rules for every lab

1. **One resource group per lab.** Name it `rg-datalyceum-<track>-<lab>`, for example `rg-datalyceum-a-01`. Cleaning up is then one delete.
2. **Set a budget on day one.** In Cost Management, create a small monthly budget (we use 10 US dollars) with an alert at 80%. The first lab shows how.
3. **Stop compute when you stop working.** Compute instances keep charging while they run. Turn on idle shutdown, and stop them when you finish.
4. **Delete when the lab is done.** A stopped resource can still cost a little for its storage. When you finish a lab, delete its resource group.
5. **Check Cost Management once a week.** It takes a minute and catches surprises early.

## Never share secrets

Do not post keys, connection strings, passwords, subscription IDs or tenant IDs in Discussions, screenshots or issues. If one leaks, rotate it in the Azure portal straight away.
