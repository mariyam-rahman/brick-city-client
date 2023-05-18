import { Accordion } from "flowbite-react";

const Blog = () => {
  return (
    <div className="m-20">
      <h2 className="text-6xl font-semibold text-center mb-14">FAQ</h2>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </Accordion.Title>
          <Accordion.Content>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                <strong>Access Token:</strong>
                <br />
                Credential issued to a client after authentication.
                <br />
                Represents authorization to access protected resources.
                <br />
                Short-lived and expires after a certain period.
                <br />
                Used in each request to authenticate and authorize the client.
              </p>
              <p>
                <strong>Refresh Token:</strong>
                <br />
                Long-lived credential issued during authentication.
                <br />
                Used to obtain a new access token after expiration.
                <br />
                Helps avoid re-authentication and improves security.
                <br />
                Used to request a new access token from the server.
              </p>
              <p>
                <strong>Storage on the client-side:</strong>
                <br />
                Access tokens are stored securely (e.g., in memory, cookies, or
                local storage).
                <br />
                Refresh tokens are typically stored securely on the server-side.
                <br />
                Access tokens must be protected from unauthorized access and XSS
                attacks.
                <br />
                Consider security measures like HTTPS, token expiration, and
                CSRF protection.
              </p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Compare SQL and NoSQL databases?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              SQL databases, based on the Structured Query Language (SQL),
              organize data into tables with predefined schemas. They follow
              ACID properties for data integrity and are suitable for complex
              relationships and structured data. Examples include MySQL,
              PostgreSQL, and Oracle. <br />
              <br />
              NoSQL databases, on the other hand, offer flexible schemas and
              store data in various formats like key-value pairs, documents,
              graphs, or columnar structures. They focus on scalability,
              allowing for efficient handling of large datasets and high traffic
              loads. NoSQL databases do not enforce rigid schemas, enabling
              agile development and schema evolution. Popular examples include
              MongoDB, Cassandra, and Redis.
              <br /> <br />
              In summary, SQL databases excel in structured data scenarios,
              while NoSQL databases are ideal for dynamic, evolving data and
              high scalability needs.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is express js? What is Nest JS?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Express.js is a minimalist web application framework for Node.js
              that simplifies building web servers and APIs. It allows
              developers to handle HTTP requests, define routes, and add
              middleware for additional functionality.
              <br />
              <br />
              NestJS, on the other hand, is a TypeScript-based framework built
              on top of Express.js. It provides a structured and modular
              approach to server-side application development, utilizing
              decorators, dependency injection, and a powerful module system.
              NestJS enhances developer productivity and code maintainability by
              leveraging TypeScript features.
              <br />
              <br /> Both frameworks are widely used in the Node.js ecosystem,
              with Express.js being lightweight and flexible, while NestJS
              offers a structured and scalable architecture.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What is MongoDB aggregate and how does it work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              MongoDB's aggregate is a method used for data aggregation and
              processing. It allows you to perform complex operations on your
              MongoDB collections by using a pipeline of stages. Each stage
              represents a specific transformation or operation applied to the
              documents. The pipeline stages are executed sequentially, with the
              output of each stage becoming the input for the next. This enables
              you to perform tasks such as filtering, grouping, sorting,
              joining, and calculating aggregations. The aggregate method
              provides a flexible and efficient way to analyze and derive
              insights from your MongoDB data.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
