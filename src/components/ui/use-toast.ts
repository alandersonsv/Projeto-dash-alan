import { type Toast } from "@/components/ui/toast"
import { useReducer } from "react"

type ToastState = {
  toasts: Toast[]
}

type ToastAction =
  | { type: "ADD_TOAST"; toast: Toast }
  | { type: "DISMISS_TOAST"; toastId?: string }
  | { type: "REMOVE_TOAST"; toastId?: string }

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, 5),
      }
      
    case "DISMISS_TOAST": {
      const { toastId } = action
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      }
    }
    
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: action.toastId
          ? state.toasts.filter((t) => t.id !== action.toastId)
          : [],
      }
          
    default:
      return state
  }
}

export function useToast() {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: [],
  })

  const toast = (props: Toast) => {
    const id = crypto.randomUUID()
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
        open: true,
        onOpenChange: (open: boolean) => {
          if (!open) dismiss(id)
        },
      },
    })
    return id
  }

  const dismiss = (toastId?: string) => {
    dispatch({ type: "DISMISS_TOAST", toastId })
    setTimeout(() => {
      dispatch({ type: "REMOVE_TOAST", toastId })
    }, 100)
  }

  return {
    ...state,
    toast,
    dismiss,
  }
}
