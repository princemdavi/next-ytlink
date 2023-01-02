import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CollapsibleItem } from ".";
import styled from "styled-components";

const FAQS = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const faqs = [
    {
      question: "Where are downloaded Youtube videos saved?",
      answer:
        'Please check the "Downloads" folder in your phone or the "download history" section of your browser.',
    },
    {
      question: "Is downloading Youtube videos illegal?",
      answer:
        "Typically, it's only illegal if the content is copyrighted, and you did not have permission to produce copies of it for distribution. If you download YouTube videos for personal purposes, it is completely legal.",
    },
    {
      question: "How many files can i download?",
      answer: "As much as you wan't, you have no limitations",
    },
    {
      question: "Is it possible to download live streaming?",
      answer:
        "It's not possible to download a video from live streaming at the moment",
    },
    {
      question: "Do I need an account to download videos?",
      answer: "You don't need an account to download videos",
    },
    {
      question: "Is ytlink safe for my PC/Phone?",
      answer: "Yes, our website is 100% safe. It is malware free",
    },
    {
      question: "How can I contact ytlink to give feedback?",
      answer: "Please send us your message to: ytinkddr@gmail.com",
    },
  ];

  return (
    <Container theme={resolvedTheme}>
      <Content theme={resolvedTheme}>
        <Title theme={resolvedTheme}>frequently asked questions</Title>
        <FaqsContainer>
          {faqs.map((faq) => (
            <CollapsibleItem key={nanoid()} theme={resolvedTheme} item={faq} />
          ))}
        </FaqsContainer>
      </Content>
    </Container>
  );
};

export default FAQS;

const Container = styled.div``;

const Content = styled.div`
  width: 90%;
  max-width: min(90%, 1024px);
  margin: 0 auto;
  padding: 2rem 0;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  text-transform: capitalize;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 400;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme == "dark" && "#0086e7"};

  @media (min-width: 600px) {
    font-size: 2.5em;
  }
`;

const FaqsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 4px;
`;
