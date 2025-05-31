import { Link } from 'umi'
import ReactMarkdown from 'react-markdown'
// @ts-expect-error
import readme from '../../README.md'

export default function HomePage() {
  return (
    <div className='prose prose-blog m-auto'>
      <ReactMarkdown>{readme}</ReactMarkdown>
    </div>
  )
}
