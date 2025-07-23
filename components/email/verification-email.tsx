import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({ userName, verificationUrl }: VerificationEmailProps) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your email address to complete your account setup</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] px-[32px] py-[40px] mx-auto max-w-[600px]">
            <Section>
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[32px]">
                Verify Your Email Address
              </Heading>
              
              <Text className="text-[16px] text-gray-700 mb-[24px]">
                Hi there,
              </Text>
              
              <Text className="text-[16px] text-gray-700 mb-[24px]">
                Thanks for signing up! To complete your account setup and start using our platform, 
                please verify your email address by clicking the button below.
              </Text>
              
              <Section className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>
              
              <Text className="text-[14px] text-gray-600 mb-[24px]">
                If the button above doesn&apos;t work, you can also copy and paste the following link into your browser:
              </Text>
              
              <Text className="text-[14px] text-blue-600 mb-[32px] break-all">
                <Link href={verificationUrl} className="text-blue-600 underline">
                  {verificationUrl}
                </Link>
              </Text>
              
              <Text className="text-[14px] text-gray-600 mb-[24px]">
                This verification link will expire in 24 hours for security reasons. If you didn&apos;t create an account, 
                you can safely ignore this email.
              </Text>
              
              <Text className="text-[16px] text-gray-700 mb-[8px]">
                Best regards,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[32px]">
                The Team
              </Text>
            </Section>
            
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                123 Business Street, Suite 100, City, State 12345
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                <Link href="#" className="text-gray-500 underline">Unsubscribe</Link> | 
                <Link href="#" className="text-gray-500 underline ml-[8px]">Privacy Policy</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default VerificationEmail;