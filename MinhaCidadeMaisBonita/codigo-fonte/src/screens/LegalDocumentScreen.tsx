import { StyleSheet, Text, View } from "react-native";
import { AppHeader } from "../components/AppHeader";
import { ScreenContainer } from "../components/ScreenContainer";
import { colors } from "../theme";

type LegalDocument = "TERMS" | "PRIVACY";

const content: Record<LegalDocument, { title: string; sections: string[] }> = {
  TERMS: {
    title: "Termos de Uso",
    sections: [
      "Projeto comunitário e educacional. O aplicativo não substitui os canais oficiais da prefeitura ou de outros órgãos públicos.",
      "Ao criar uma conta, você declara que as informações e fotografias enviadas são verdadeiras e que não violam direitos de terceiros.",
      "Relatos com conteúdo ofensivo, falso ou que exponha pessoas poderão ser removidos.",
      "Você pode excluir sua conta a qualquer momento na tela Minha conta.",
    ],
  },
  PRIVACY: {
    title: "Política de Privacidade",
    sections: [
      "Coletamos nome, e-mail, localização aproximada da ocorrência, fotografia e dados do sensor de movimento no momento do registro.",
      "A localização só é solicitada quando você usa o GPS ou captura a localização de um relato, e somente com a sua autorização.",
      "Os relatos publicados (foto, descrição e coordenadas) ficam visíveis publicamente para consulta.",
      "Ao excluir a conta, seus dados pessoais são removidos ou anonimizados.",
    ],
  },
};

export function LegalDocumentScreen({
  document,
  onBack,
}: {
  document: LegalDocument;
  onBack: () => void;
}) {
  const doc = content[document];

  return (
    <View style={s.page}>
      <AppHeader title={doc.title} onBack={onBack} />
      <ScreenContainer>
        {doc.sections.map((text, index) => (
          <Text key={index} style={s.paragraph}>
            {text}
          </Text>
        ))}
      </ScreenContainer>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  paragraph: { color: colors.text, lineHeight: 22, marginBottom: 14 },
});
