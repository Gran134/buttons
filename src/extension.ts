import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "Buttons" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const compile = vscode.commands.registerCommand('Buttons.compile', () => {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showErrorMessage('No file is open.');
			return;
		}

		const filePath = editor.document.uri.fsPath;
		const folderPath = path.dirname(filePath);

		const terminal = vscode.window.createTerminal({
			name: 'Compile',
			cwd: folderPath
		});
		terminal.show();
		terminal.sendText('g++ main.cpp -o main.exe');


	});

	const play = vscode.commands.registerCommand('Buttons.start', () => {
		const terminal = vscode.window.activeTerminal || vscode.window.createTerminal('Running Bash');
		terminal.show();
		terminal.sendText('./main.exe')
	})

	context.subscriptions.push(compile);
}

// This method is called when your extension is deactivated
export function deactivate() {}
