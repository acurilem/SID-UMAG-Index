<template>
    <div class="loading-overlay" v-if="false">
      <div class="loading-spinner"></div>
    </div>
</template>

<script>
import { useLoadingStore } from '~/store/loadingStore';
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const loadingStore = useLoadingStore();
    const isLoading = computed(() => loadingStore.isLoadingStatus);

    return {
      isLoading,
    };
  },
};
</script>

<style scoped lang="scss">
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.8);
  border-top: 4px solid $color-primary;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
