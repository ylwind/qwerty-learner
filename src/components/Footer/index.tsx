import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InfoPanel from '@/components/InfoPanel'
import alipay from '@/assets/alipay.png'
import vscLogo from '@/assets/vsc-logo.svg'

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [content, setShowContent] = useState('donate')

  const icon = content === 'donate' ? 'coffee' : 'terminal'
  const color = content === 'donate' ? 'bg-yellow-100' : 'bg-blue-300'
  const btnColor = content === 'donate' ? 'bg-yellow-300' : 'bg-blue-400'
  const iconColor = content === 'donate' ? 'text-yellow-500' : 'text-blue-600'

  return (
    <>
      <div className="mt-4 w-full pb-1 text-center text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <div className="group relative inline-block ">
          <a href="https://www.ripic.site" target="_blank" className="mr-3 text-gray-500 dark:text-gray-400" title="个人博客">
            By 杨柳自留地
          </a>
          <div className="invisible absolute bottom-full left-1/2 -ml-20 flex w-40 items-center justify-center pt-2 group-hover:visible">
            <span className="py-1 px-3 text-xs text-gray-500 dark:text-gray-400">个人博客</span>
          </div>
        </div>
        <a
          className="cursor-pointer pl-2 text-gray-500 no-underline hover:no-underline dark:text-gray-400"
          href="https://github.com/Kaiyiwing/qwerty-learner"
          target="_blank"
          rel="noreferrer"
        >
          原作者Github仓库
        </a>
      </div>
    </>
  )
}

export default Footer
