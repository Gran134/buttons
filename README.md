# Buttons

`Buttons` is a simple VS Code extension that adds two toolbar buttons for small C/C++ projects:

- `Compile` builds `main.cpp` into `main.exe`
- `Play` runs `./main.exe` in the terminal

## Features

- Adds `Compile` and `Play` buttons to the editor title bar
- Opens the compile terminal in the folder of the currently open file
- Sends terminal commands directly from the extension

## How It Works

1. Open a C or C++ source file.
2. Click `Compile` to run:

```bash
g++ main.cpp -o main.exe
```

3. Click `Play` to run:

```bash
./main.exe
```

## Requirements

- VS Code
- A working `g++` installation available on your `PATH`
- A terminal that supports `./main.exe` for the run command

## Current Limitations

- The compile command currently builds `main.cpp` specifically
- The run command assumes the executable is named `main.exe`
- The run command is currently written for `bash`-style terminals

## Release Notes

### 1.0.1

- Added `Compile` and `Play` editor toolbar buttons
- Compile opens in the active file's folder

### 1.0.0

- Initial release
