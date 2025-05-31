import { Link } from 'umi'
import ReactMarkdown from 'react-markdown'
// @ts-expect-error
import readme from '../../README.md'

export default function HomePage() {
  return (
    <div className='prose max-w-4xl prose-blog m-auto'>
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  )
}
