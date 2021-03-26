import Hamburger from '@iconify-icons/radix-icons/hamburger-menu'
import { Icon } from '@iconify/vue'
import clsx from 'clsx'
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  watchEffect,
} from 'vue'
import { useRouter } from 'vue-router'
import { configs } from '../../configs'
import { MenuModel, buildMenus } from '../../utils/build-menus'
import styles from './index.module.css'
import Avatar from '../../components/avatar/index.vue'
import { useInjector } from '../../utils/deps-injection'
import { UserStore } from '../../stores/user'
export const Sidebar = defineComponent({
  name: 'sidebar-comp',
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    onCollapseChange: {
      type: Function as PropType<{ (status: boolean): void }>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter()
    const { user } = useInjector(UserStore)
    const route = computed(() => router.currentRoute.value)
    const menus = ref<MenuModel[]>([])
    onMounted(() => {
      menus.value = buildMenus(router.getRoutes())
    })

    const _index = ref(0)

    function updateIndex(index: number) {
      if (index === _index.value) {
        _index.value = -1
        return
      }
      _index.value = index
    }

    function handleRoute(item: MenuModel, index?: number) {
      if (item.subItems?.length) {
      } else {
        // console.log(item.fullPath)

        router.push({
          path: item.fullPath.slice(1),
          query: item.query,
        })
        if (index) {
          updateIndex(index)
        }
      }
    }

    const title = configs.title

    return () => (
      <div
        class={clsx(
          styles['wrapper'],
          props.collapse ? styles['collapse'] : null,
        )}
        style={{
          width:
            !props.collapse && props.width ? props.width + 'px' : undefined,
        }}
      >
        <div
          class={
            'fixed left-0 top-0 h-screen overflow-hidden z-10 text-white ' +
            styles['sidebar']
          }
        >
          <div class={'title relative font-medium text-center text-2xl'}>
            <h1 class="py-6" style={{ display: props.collapse ? 'none' : '' }}>
              {title}
            </h1>
            <button
              class={styles['collapse-button']}
              onClick={() => {
                props.onCollapseChange(!props.collapse)
              }}
            >
              <Icon icon={Hamburger} />
            </button>
          </div>
          <div class={styles['menu']}>
            <div class={styles['items']}>
              {menus.value.map((item, index) => {
                return (
                  <div
                    class={clsx(
                      'py-2',
                      route.value.fullPath === item.fullPath.slice(1) ||
                        route.value.fullPath.startsWith(item.fullPath.slice(1))
                        ? styles['active']
                        : '',

                      styles['item'],
                    )}
                    data-path={item.fullPath}
                  >
                    <button
                      key={item.title}
                      class={'py-2 flex w-full items-center'}
                      onClick={
                        item.subItems?.length
                          ? () => updateIndex(index)
                          : () => handleRoute(item, index)
                      }
                    >
                      <span
                        style={{ flexBasis: '3rem' }}
                        class="flex justify-center"
                      >
                        {item.icon}
                      </span>
                      <span class={styles['item-title']}>{item.title}</span>
                    </button>
                    {item.subItems && (
                      <ul
                        class={clsx(
                          'overflow-hidden  ' +
                            (!!item.subItems.length ? styles['has-child'] : ''),
                          _index.value === index ? styles['expand'] : '',
                        )}
                        style={{
                          maxHeight:
                            _index.value === index
                              ? item.subItems.length * 3.5 + 'rem'
                              : '0',
                        }}
                      >
                        {item.subItems.map((child) => {
                          return (
                            <li
                              key={child.path}
                              // data-fullPath={child.fullPath}
                              class={clsx(
                                'py-4 ',
                                route.value.fullPath === child.fullPath ||
                                  route.value.fullPath.startsWith(
                                    child.fullPath.slice(1),
                                  )
                                  ? styles['active']
                                  : '',
                                styles['item'],
                              )}
                            >
                              <button
                                onClick={() => handleRoute(child)}
                                class={'flex w-full items-center'}
                              >
                                <span
                                  class="flex justify-center items-center"
                                  style={{ flexBasis: '3rem' }}
                                >
                                  {child.icon}
                                </span>
                                <span class={styles['item-title']}>
                                  {child.title}
                                </span>
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <div
            class={clsx(
              'bottom-bar flex space-x-2 items-center  transform translate-y-1/3 phone:hidden ',
              props.collapse ? 'px-8' : 'px-12',
            )}
          >
            <Avatar src={user.value?.avatar!} size={40} />
            {!props.collapse ? (
              <span class="pl-12">{user.value?.name}</span>
            ) : null}
          </div>
          <div class="hidden phone:flex w-full items-center justify-center absolute bottom-0 pb-4">
            <Avatar src={user.value?.avatar!} size={40} />
          </div>
        </div>
      </div>
    )
  },
})