import { useSaveConfirm } from 'hooks/use-save-confirm'
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import {
  defineAsyncComponent,
  defineComponent,
  onMounted,
  PropType,
  Ref,
  ref,
  toRaw,
  watch,
} from 'vue'
import { editorBaseProps } from './universal/base'

export const VditorEditor = defineAsyncComponent(() =>
  Promise.resolve(
    defineComponent({
      props: {
        ...editorBaseProps,
        innerRef: { type: Object as PropType<Ref<Vditor>> },
      },
      setup(props) {
        const vRef = ref()

        let instance: Vditor
        onMounted(() => {
          const i = new Vditor(vRef.value, {
            value: props.text,
            toolbarConfig: { hide: true },
            toolbar: [],
            cache: {
              enable: false,
            },
            input(val: string) {
              props.onChange(val.trim())
            },
            blur(val: string) {
              props.onChange(val.trim())
            },
            focus(val: string) {
              props.onChange(val.trim())
            },
          })
          instance = i

          if (props.innerRef) {
            props.innerRef.value = instance
          }
        })

        let memoInitialValue: string = toRaw(props.text)

        watch(
          () => props.text,
          (n) => {
            if (!memoInitialValue && n) {
              memoInitialValue = n
            }
            // FIXME:
            if (
              instance &&
              !instance.getValue().trim().length &&
              n !== instance.getValue()
            ) {
              instance.setValue(n)
            }
          },
        )

        useSaveConfirm(props.unSaveConfirm, () => {
          return instance.getValue().trim() === memoInitialValue.trim()
        })
        return () => (
          <div ref={vRef} style={{ height: 'calc(100vh - 18.8rem)' }}></div>
        )
      },
    }),
  ),
)