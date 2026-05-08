import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { Box, Title, Text } from "@mantine/core";

import styles from "./TreatmentDetailContent.module.css";

interface TreatmentLongFormBodyProps {
  content: string;
  contentImages: string[];
  contextTitle?: string;
}

function renderInlineBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function renderContentBlock(
  block: string,
  contentImages: string[],
  contextTitle: string | undefined,
  blockKey: string,
) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed === "---") {
    return (
      <div key={blockKey} className={styles.proseDivider} role="separator" />
    );
  }

  const imageMatch = trimmed.match(/^\[IMAGE:(\d+)\]$/);
  if (imageMatch) {
    const idx = Number(imageMatch[1]) - 1;
    const src = contentImages[idx];
    if (!src) return null;
    return (
      <figure key={blockKey} className={styles.proseFigure}>
        <Image
          src={src}
          alt={
            contextTitle
              ? `${contextTitle} - image ${idx + 1}`
              : `Treatment image ${idx + 1}`
          }
          width={1200}
          height={800}
          className={styles.proseImg}
          sizes="(max-width: 900px) 100vw, 860px"
        />
      </figure>
    );
  }

  if (trimmed.startsWith("# ")) {
    return (
      <Title key={blockKey} order={2} className={styles.proseH2}>
        {trimmed.replace(/^#\s+/, "")}
      </Title>
    );
  }

  if (trimmed.startsWith("## ")) {
    return (
      <Title key={blockKey} order={3} className={styles.proseH3}>
        {trimmed.replace(/^##\s+/, "")}
      </Title>
    );
  }

  if (trimmed.startsWith("### ")) {
    return (
      <Title key={blockKey} order={4} className={styles.proseH4}>
        {trimmed.replace(/^###\s+/, "")}
      </Title>
    );
  }

  const lines = trimmed.split("\n").map((l) => l.trim());
  const listItems = lines
    .filter((l) => l.startsWith("* "))
    .map((l) => l.slice(2));
  if (listItems.length > 0 && listItems.length === lines.length) {
    return (
      <Box key={blockKey} component="ul" className={styles.proseList}>
        {listItems.map((item, i) => (
          <li key={i}>
            <Text className={styles.proseP}>{renderInlineBold(item)}</Text>
          </li>
        ))}
      </Box>
    );
  }

  return (
    <Text key={blockKey} className={styles.proseP}>
      {renderInlineBold(trimmed)}
    </Text>
  );
}

function isImagePlaceholder(block: string): boolean {
  return /^\[IMAGE:\d+\]$/.test(block.trim());
}

function isH2(block: string): boolean {
  const t = block.trim();
  if (/^###\s+/.test(t) || /^##\s+/.test(t)) return false;
  return /^#\s+/.test(t);
}

export function TreatmentLongFormBody({
  content,
  contentImages,
  contextTitle,
}: TreatmentLongFormBodyProps) {
  const blocks = content.split("\n\n").filter((p) => p.trim().length > 0);

  const out: ReactNode[] = [];
  let i = 0;
  let uid = 0;
  const nextId = () => `tb-${uid++}`;

  while (i < blocks.length) {
    const raw = blocks[i];
    const b = raw.trim();

    if (b === "---") {
      out.push(
        <div key={nextId()} className={styles.proseDivider} role="separator" />,
      );
      i++;
      continue;
    }

    if (isH2(raw)) {
      const headingBlock = raw;
      i++;

      if (i < blocks.length && isImagePlaceholder(blocks[i])) {
        const imageBlock = blocks[i];
        i++;
        const rest: string[] = [];
        while (i < blocks.length) {
          const nb = blocks[i].trim();
          if (nb === "---") break;
          if (isH2(blocks[i])) break;
          rest.push(blocks[i]);
          i++;
        }

        const chunkKey = nextId();
        out.push(
          <div key={chunkKey} className={styles.articleChunk}>
            {renderContentBlock(
              headingBlock,
              contentImages,
              contextTitle,
              `${chunkKey}-h`,
            )}
            <div className={styles.articleMediaRow}>
              <div className={styles.articleMediaFigure}>
                {renderContentBlock(
                  imageBlock,
                  contentImages,
                  contextTitle,
                  `${chunkKey}-img`,
                )}
              </div>
              <div className={styles.articleMediaText}>
                {rest.map((blk, j) => (
                  <Fragment key={`${chunkKey}-t-${j}`}>
                    {renderContentBlock(
                      blk,
                      contentImages,
                      contextTitle,
                      `${chunkKey}-p-${j}`,
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>,
        );
        continue;
      }

      const rest: string[] = [];
      while (i < blocks.length) {
        const nb = blocks[i].trim();
        if (nb === "---") break;
        if (isH2(blocks[i])) break;
        rest.push(blocks[i]);
        i++;
      }

      const chunkKey = nextId();
      out.push(
        <div key={chunkKey} className={styles.articleChunk}>
          {renderContentBlock(
            headingBlock,
            contentImages,
            contextTitle,
            `${chunkKey}-h`,
          )}
          <div className={styles.articleStack}>
            {rest.map((blk, j) => (
              <Fragment key={`${chunkKey}-s-${j}`}>
                {renderContentBlock(
                  blk,
                  contentImages,
                  contextTitle,
                  `${chunkKey}-s-${j}`,
                )}
              </Fragment>
            ))}
          </div>
        </div>,
      );
      continue;
    }

    const orphan: string[] = [];
    while (i < blocks.length) {
      const nb = blocks[i].trim();
      if (nb === "---") break;
      if (isH2(blocks[i])) break;
      orphan.push(blocks[i]);
      i++;
    }

    const orphanKey = nextId();
    out.push(
      <div key={orphanKey} className={styles.articleStack}>
        {orphan.map((blk, j) => (
          <Fragment key={`${orphanKey}-o-${j}`}>
            {renderContentBlock(
              blk,
              contentImages,
              contextTitle,
              `${orphanKey}-o-${j}`,
            )}
          </Fragment>
        ))}
      </div>,
    );
  }

  return <div className={styles.proseRoot}>{out}</div>;
}
