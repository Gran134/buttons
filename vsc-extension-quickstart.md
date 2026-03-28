# VS Code Extension Notes

This file keeps short development notes for the `Buttons` extension.

## Project Files

- `package.json` defines commands, toolbar contributions, scripts, and extension metadata
- `src/extension.ts` registers the `Compile` and `Play` commands
- `out/extension.js` is the compiled JavaScript output

## Local Development

1. Run `F5` to launch an Extension Development Host.
2. Open a source file.
3. Test the `Compile` and `Play` buttons from the editor title bar.

## Current Behavior

- `Compile` creates a terminal in the folder of the active file
- `Compile` runs `g++ main.cpp -o main.exe`
- `Play` sends `./main.exe` to the active terminal

## Next Improvements

- Compile the currently open `.cpp` file instead of always using `main.cpp`
- Detect terminal shell or create a known shell for the run command
- Add clearer error messages when no file or terminal is available
