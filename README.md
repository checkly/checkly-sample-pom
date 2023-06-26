# Checkly CLI PageObject example

This example project shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow using the [PageObject Model](https://martinfowler.com/bliki/PageObject.html) (POM). We are using https://danube-web.shop as a monitoring target.

1. Write API Checks and Playwright-powered Browser Checks!
2. Test -> Deploy: now you have your app monitored around the clock. All from your code base.

## Project Structure

This project shows one possible way to build POM based checks that can be executed on-demand and run on a schedule. One flow, checkout, is covered right now, with more coming soon.

```
.
|-- __checks__
|   |-- key-user-flows
|   |   |-- pages
|   |      |-- cart.ts
|   |      |-- ...
|   |-- api.check.ts
|   `-- checkout.spec.ts
|-- checkly.config.ts
|-- playwright.config.ts
|-- README.md
`-- package.json
```

- Running `npx checkly test` will look for `.check.ts` files and `.spec.ts` in `__checks__` directories and execute them in a dry run.

- Running `npx check deploy` will deploy your checks to Checkly, attach alert channels, and run them on a 10m schedule in the 
region `us-east-1` and `eu-west-1`

- As an additional option, running `npx playwright test` will run your `.spec.ts` in `__checks__` directories locally using Playwright with the settings specified in `playwright.config.ts`

## CLI Commands

Run the core CLI commands with `npx checkly <command>` 

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).

> tip: you can add autocomplete to your shell using `npx checkly autocomplete`