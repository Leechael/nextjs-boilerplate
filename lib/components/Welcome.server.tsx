import type { NextPage } from 'next'
import Image from 'next/image'
import tw, { styled } from 'twin.macro'

const Main = tw.main`
  min-h-screen py-16 flex flex-1 flex-col justify-center items-center
`

const Title = styled.h1`
  ${tw`m-0 text-center`}
  line-height: 1.15;
  font-size: 4rem;

  a {
    ${tw`text-blue-500 no-underline hover:underline focus:underline active:underline`}
  }
`

const LinkBox = styled.a`
  ${tw`m-4 p-6 border border-solid border-[#eaeaea] rounded-[10px] max-w-[300px]`}
  ${tw`text-left no-underline`}
  ${tw`transition-colors`}

  &:hover, &:focus, &:active {
    ${tw`text-blue-500 border-blue-500`}
  }

  h2 {
    ${tw`mb-4 text-2xl`}
  }

  p {
    ${tw`m-0 text-xl leading-6`}
  }
`

LinkBox.defaultProps = {
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank',
}

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  font-size: 1.1rem;
  ${tw`p-3 font-mono`}
`

const Welcome: NextPage = () => {
  return (
    <div tw="px-8 box-border">
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <p tw="text-center my-16 text-2xl">
          Get started by editing{' '}
          <Code>pages/index.tsx</Code>
        </p>

        <div tw="flex flex-col items-center justify-center flex-wrap w-full md:max-w-[800px] md:flex-row">
          <LinkBox href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </LinkBox>

          <LinkBox href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </LinkBox>

          <LinkBox href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </LinkBox>

          <LinkBox
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </LinkBox>
        </div>
      </Main>

      <footer tw="flex justify-center items-center py-8 border-t border-solid border-[#eaeaea]">
        <a
          tw="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span tw="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Welcome
