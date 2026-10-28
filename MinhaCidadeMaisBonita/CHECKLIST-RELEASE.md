# CHECKLIST DE RELEASE – Minha Cidade mais Bonita 1.0.0

Legenda: [x] verificado · [ ] pendente (exige dispositivo ou ação da dupla)

## Preparação
- [x] `npm install` sem interrupção
- [x] `npm run typecheck` sem erros (após as correções C-01 a C-03)
- [ ] `npx expo-doctor` 21/21 (na validação: 19/21; 2 falharam por falta de rede, reexecutar com internet)
- [ ] App abre no Android sem erro no log (reteste RT-01)

## Estrutura e segurança
- [x] App.tsx na raiz; src com components, contexts, screens, services, theme e types
- [x] Sem chave `service_role` no código
- [x] Sem código minificado
- [x] `.env` fora da entrega; `.env.example` com placeholders; `.gitignore` protege `.env`
- [x] Sem pasta `.expo/`, arquivos de agente ou "- Copia" na entrega

## Versão
- [x] Nome e versão: `minha-cidade-mais-bonita` 1.0.0 (package.json e app.json)
- [x] README com instalação e execução

## Defeitos
- [x] BUG-01 `{" "}` solto em `<View>` (App.tsx) – corrigido
- [x] BUG-02 LegalDocumentScreen inexistente – recriada
- [x] BUG-03 Sair não navega – corrigido
- [ ] Retestes RT-01, RT-02 (dispositivo) e RT-03 no Android

## Testes em dispositivo (ver testes/CASOS-DE-TESTE.md)
- [ ] TF-01 a TF-27
- [ ] FE-01 a FE-08

## Fechamento
- [ ] Capturas de tela nomeadas (E03 e demais)
- [ ] Relatório revisado pela dupla
- [ ] Decisão final: ______ (atual: REPROVADO PARA EMPACOTAMENTO até concluir os retestes)

## Riscos conhecidos para a próxima versão
- Recuperação de senha: não há tratamento do link `minhacidadebonita://auth/reset-password` (Linking/setSession); o evento PASSWORD_RECOVERY pode não ocorrer.
- Senha mínima: 6 no cadastro e 8 na redefinição.
- Texto de Termos e Privacidade é provisório.
- Histórico da ocorrência não é exibido no detalhe.
