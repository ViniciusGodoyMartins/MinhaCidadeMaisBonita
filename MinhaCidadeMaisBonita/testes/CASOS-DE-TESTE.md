# Casos de teste – Minha Cidade mais Bonita 1.0.0

Preencha Resultado observado, APROVADO/REPROVADO e Evidência (E_<ID>_<nn>_<descricao>.png). Todo REPROVADO gera BUG.

| ID | Ação | Esperado | Observado | Resultado | Evidência |
|---|---|---|---|---|---|
| TF-01 | Abrir o aplicativo | Tela de abertura sem erro visual ou tela vermelha. |  |  |  |
| TF-02 | Tocar em Continuar | Tela de seleção da cidade é apresentada. |  |  |  |
| TF-03 | Informar cidade manualmente | Cidade é aceita e Home é aberta. |  |  |  |
| TF-04 | Fechar e reabrir | Cidade permanece selecionada. |  |  |  |
| TF-05 | Usar localização | Permissão é solicitada; campos são preenchidos ou a falha é tratada. |  |  |  |

| ID | Ação | Esperado | Observado | Resultado | Evidência |
|---|---|---|---|---|---|
| TF-06 | Abrir problemas ativos sem login | Lista abre sem exigir autenticação. |  |  |  |
| TF-07 | Abrir problemas resolvidos sem login | Lista abre sem exigir autenticação. |  |  |  |
| TF-08 | Consultar lista vazia | Plantinha e mensagem contextual aparecem. |  |  |  |
| TF-09 | Selecionar um relato | Detalhes abrem com foto e descrição. |  |  |  |

| ID | Ação | Esperado | Observado | Resultado | Evidência |
|---|---|---|---|---|---|
| TF-10 | Abrir Entrar | Login aparece centralizado e utilizável. |  |  |  |
| TF-11 | Alternar para Criar conta | Campos e aceite são exibidos. |  |  |  |
| TF-12 | Abrir Termos e voltar | Retorna ao modo Criar conta. |  |  |  |
| TF-13 | Abrir Política e voltar | Retorna ao modo Criar conta. |  |  |  |
| TF-14 | Criar conta sem aceite | Cadastro é bloqueado com orientação. |  |  |  |
| TF-15 | Entrar com conta confirmada | Sessão é criada e conta é identificada. |  |  |  |
| TF-16 | Sair da conta | Sessão encerra e consulta pública permanece. |  |  |  |

| ID | Ação | Esperado | Observado | Resultado | Evidência |
|---|---|---|---|---|---|
| TF-17 | Abrir Esqueci minha senha | Tela de recuperação é apresentada. |  |  |  |
| TF-18 | Solicitar recuperação | Aplicativo apresenta retorno e libera o botão. |  |  |  |
| TF-19 | Usar senhas diferentes | Atualização é bloqueada. |  |  |  |
| TF-20 | Salvar senha válida | Senha é atualizada e login fica disponível. |  |  |  |

| ID | Ação | Esperado | Observado | Resultado | Evidência |
|---|---|---|---|---|---|
| TF-21 | Abrir câmera | Permissão é solicitada e câmera abre. |  |  |  |
| TF-22 | Capturar fotografia | Pré-visualização é exibida. |  |  |  |
| TF-23 | Capturar localização | Coordenadas são obtidas ou o erro é tratado. |  |  |  |
| TF-24 | Enviar incompleto | Publicação é bloqueada com orientação. |  |  |  |
| TF-25 | Publicar completo | Etapas aparecem e envio termina. |  |  |  |
| TF-26 | Abrir lista após envio | Novo relato aparece na cidade. |  |  |  |
| TF-27 | Verificar histórico | Registro inicial “Relato publicado” existe. |  |  |  |

| ID | Ação | Esperado | Observado | Resultado | Evidência |
|---|---|---|---|---|---|
| FE-01 | Negar câmera | Permissão negada é tratada; aplicação continua utilizável. |  |  |  |
| FE-02 | Negar localização | Falha é informada; tela não trava. |  |  |  |
| FE-03 | Publicar sem foto | Validação bloqueia o envio. |  |  |  |
| FE-04 | Usar texto muito curto | Validação apresenta orientação. |  |  |  |
| FE-05 | Entrar com senha incorreta | Falha é informada sem encerrar o aplicativo. |  |  |  |
| FE-06 | Desconectar internet antes da consulta | Erro é apresentado e navegação continua. |  |  |  |
| FE-07 | Tocar duas vezes em Publicar | Segundo envio é bloqueado. |  |  |  |
| FE-08 | Interromper envio | Estado Publicando termina após erro ou timeout. |  |  |  |
