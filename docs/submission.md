# Submitting Changes

We use a standard GitHub Flow. Here is how to submit your work:

### 1. Stage Your Changes

Add the files you want to commit:
`git add .`

### 2. Commit (Runs Linting)

When you commit, our **pre-commit hook** will automatically run. It checks your code for style issues (linting) and fixes them if possible.
`git commit -m "feat: description of your change"`

> [!NOTE]
> If the commit fails, it means there are linting errors you need to fix manually. Check the error message, fix the code, and try again.

### 3. Push (Runs Build)

When you push, our **pre-push hook** will run the full project build to ensure nothing is broken.
`git push origin your-branch-name`

> [!IMPORTANT]
> This step might take a few seconds. If the build fails, the push will be rejected. You must fix the errors before you can push.

#### Bypassing Checks (Emergency Only)

If you are in a rush and **certain** your code is correct (or if you want to let CI/CD handle the checks), you can skip the build check:
`git push --no-verify`

### 4. Open a Pull Request

Go to GitHub and open a Pull Request against the `main` branch.
