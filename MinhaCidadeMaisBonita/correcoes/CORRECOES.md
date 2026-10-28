# Correções aplicadas

| ID | Bug | Arquivo | Correção |
|----|-----|---------|----------|
| C-01 | BUG-01 | App.tsx | Removidos os 12 `{" "}` colocados como filhos diretos de `<View>` (texto fora de `<Text>`). |
| C-02 | BUG-02 | src/screens/LegalDocumentScreen.tsx | Arquivo continha cópia de HomeScreen. Recriado `LegalDocumentScreen({ document, onBack })` com Termos e Privacidade. |
| C-03 | BUG-03 | src/screens/AccountScreen.tsx | Botão Sair: `signOut().then(onBack)` para voltar à Home. |

Os mesmos arquivos já estão aplicados em `codigo-fonte/`. Retestes: ver RELATORIO-VALIDACAO.docx (Etapa 5).
