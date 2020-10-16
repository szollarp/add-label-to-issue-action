# Action Add Labels

It's a GitHub Action to add GitHub labels.

## Inputs

|      NAME      |                                           DESCRIPTION                                           |   TYPE   | REQUIRED |                                     DEFAULT                                     |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------- |
| `token` | A GitHub token.                                                                                 | `string` | `true`   | `N/A`                                                                           |
| `labels`       | The labels name to be added. Must be separated with ';' if there're multiple labels. | `string` | `true`   | `N/A`                                                                           |
| `issueNumber`       | The number of the issue.                                                        | `number` | `true`  | `N/A`


## Example

### Add labels to issue

```yaml
jobs:
  add_labels:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: szollarp/add-label-to-issue-action@v1
        with:
          token: ${{ secrets.github_token }}
          labels: fix;build
          issueNumber: 100
```