import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import './globals.css';
import ApolloWrapper from '../components/ApolloWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}