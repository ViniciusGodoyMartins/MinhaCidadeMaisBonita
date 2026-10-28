# Minha Cidade mais Bonita

Aplicativo móvel (Expo / React Native / TypeScript) que dá voz à população: cidadãos consultam e registram problemas urbanos com foto, localização e descrição. Backend: Supabase (Auth, Storage e banco).

Projeto comunitário e educacional. Não substitui os canais oficiais.

## Estrutura da entrega

```
MinhaCidadeMaisBonita/
├── codigo-fonte/            aplicativo validado e corrigido
├── evidencias/              saídas de comandos, logs e capturas (padrão E_<ID>_<nn>_<descricao>)
├── testes/                  CASOS-DE-TESTE.md (27 funcionais + 8 falhas controladas)
├── correcoes/               arquivos corrigidos + CORRECOES.md
├── README.md
├── CHECKLIST-RELEASE.md
└── RELATORIO-VALIDACAO.docx
```

## Requisitos

- Node.js 20 ou superior (validado com v22) e npm
- Android com Expo Go compatível com o SDK 57, ou emulador Android
- URL e chave pública (publishable) do Supabase fornecidas pelo professor

## Instalação

```bash
cd codigo-fonte
npm install
cp .env.example .env      # no Windows: copy .env.example .env
```

Edite o `.env` e informe:

```
EXPO_PUBLIC_SUPABASE_URL=<url fornecida>
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<chave pública fornecida>
```

Nunca use a chave `service_role` no aplicativo e nunca publique o `.env`.

## Execução

```bash
npx expo start --clear --android
```

## Validação antes da distribuição

```bash
npm run typecheck     # TypeScript sem erros
npx expo-doctor       # requer internet
npm run validate      # os dois acima
```

## Funcionalidades

Consulta pública de problemas ativos e resolvidos; cadastro e login com confirmação de e-mail; recuperação de senha; registro de problema com câmera, GPS e sensor de movimento; confirmação de resolução; exclusão de conta.
