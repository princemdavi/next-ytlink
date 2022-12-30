import create from "zustand";

const useStore = create((set) => ({
  scrollToTop: false,
  updateShowScrollToTop: (scrollToTop) =>
    set(() => ({ scrollToTop: scrollToTop })),
}));

export default useStore;
