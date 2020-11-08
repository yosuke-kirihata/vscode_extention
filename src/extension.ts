// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import * as path from "path";

let extensionPath: string;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "test-extention" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('test-extention.helloWorld', () => {
        // The code you place here will be executed every time your command is executed

        const panel = vscode.window.createWebviewPanel(
            'previewHelloVSCode',
            'Preview Hello VS Code',
            vscode.ViewColumn.Two,
            {
                enableScripts: true
            }
        );

        panel.webview.html = getWebviewContent(panel.webview);

        // WebViewへのメッセージ送信
        panel.webview.postMessage({
            type: 'msg',
            text: 'VSCode->WebView'
        });

        // WebViewからのメッセージ受信
        panel.webview.onDidReceiveMessage(e => {
            console.log(e);
        });

    });

    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World from test_extention!');

    extensionPath = context.extensionPath; //WebView表示に必要

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }

function getWebviewContent(webview: vscode.Webview) {

    // Local path to main script run in the webview
    const reactAppPathOnDisk = vscode.Uri.file(
        path.join(extensionPath, "dist", "bundle.js")
    );
    const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });


    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Config View</title>
    </head>
    <body>
        <div id="root">loading..</div>
        <script src="${reactAppUri}"></script>
    </body>
    </html>`;
}