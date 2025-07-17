import { defineComponent } from 'vue'

import { Icon } from '@vicons/utils'

import { EyeIcon, EyeOffIcon } from '~/components/icons'

interface StatusToggleProps {
  isPublished: boolean
  onToggle: (newStatus: boolean) => Promise<void> | void
  size?: 'small' | 'medium'
}

export const StatusToggle = defineComponent<StatusToggleProps>({
  name: 'StatusToggle',
  props: {
    isPublished: {
      type: Boolean,
      required: true,
    },
    onToggle: {
      type: Function,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
  setup(props) {
    const handleClick = async () => {
      await props.onToggle(!props.isPublished)
    }

    return () => {
      const isSmall = props.size === 'small'
      const publishedStyles = {
        backgroundColor: '#e8f5e8', // 薄荷绿背景
        color: '#2d5a2d', // 深绿色文字
        border: '1px solid #c5e4c5', // 浅绿色边框
      }

      const draftStyles = {
        backgroundColor: '#fff0e6', // 桃子橙背景
        color: '#b8660a', // 深橙色文字
        border: '1px solid #ffd9b3', // 浅橙色边框
      }

      const currentStyles = props.isPublished ? publishedStyles : draftStyles

      return (
        <div
          class={`group relative inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg transition-all duration-200 hover:shadow-sm ${
            isSmall ? 'w-16 px-1.5 py-0.5 text-xs' : 'w-20 px-2 py-1 text-xs'
          }`}
          style={currentStyles}
          onClick={handleClick}
        >
          {/* 默认状态显示 */}
          <div class="flex items-center gap-1 transition-opacity duration-200 group-hover:opacity-0">
            <Icon size={isSmall ? 10 : 12}>
              {props.isPublished ? <EyeIcon /> : <EyeOffIcon />}
            </Icon>
            {props.isPublished ? '已发布' : '草稿'}
          </div>

          {/* hover时的切换提示 */}
          <div
            class="absolute inset-0 flex items-center justify-center rounded-lg bg-inherit text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            style={currentStyles}
          >
            切换为{props.isPublished ? '草稿' : '发布'}
          </div>
        </div>
      )
    }
  },
})
