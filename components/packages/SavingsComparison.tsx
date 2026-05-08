import { Container, Title, Text, Box } from "@mantine/core";
import { getTranslations } from "next-intl/server";

import { SectionReveal } from "@/components/ui/Animate";

import styles from "./SavingsComparison.module.css";

interface Row {
  treatment: string;
  uk: string;
  us: string;
  linova: string;
  savings: string;
}

export async function SavingsComparison() {
  const t = await getTranslations("packages");
  const cols = t.raw("savings.columns") as {
    treatment: string;
    uk: string;
    us: string;
    linova: string;
    savings: string;
  };
  const rows = t.raw("savings.rows") as Row[];

  return (
    <SectionReveal delay={0.04}>
      <Box
        component="section"
        className={styles.section}
        aria-labelledby="savings-heading"
      >
        <Container size="lg">
          <div className={styles.header}>
            <Title order={2} id="savings-heading" mb="sm" ta="center">
              {t("savings.title")}
            </Title>
            <Text c="dimmed" ta="center" size="md">
              {t("savings.subtitle")}
            </Text>
          </div>
          <div className={styles.scroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col" className={styles.colTreatment}>
                    {cols.treatment}
                  </th>
                  <th scope="col">{cols.uk}</th>
                  <th scope="col">{cols.us}</th>
                  <th scope="col">{cols.linova}</th>
                  <th scope="col">{cols.savings}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className={styles.colTreatment}>{row.treatment}</td>
                    <td>{row.uk}</td>
                    <td>{row.us}</td>
                    <td>{row.linova}</td>
                    <td className={styles.colSavings}>{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Text className={styles.footnote}>{t("savings.footnote")}</Text>
        </Container>
      </Box>
    </SectionReveal>
  );
}
