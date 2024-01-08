export const state = () => ({
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refresh_token"),
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
    localStorage.setItem("token", token);
  },
  setRefreshToken(state, refreshToken) {
    state.refreshToken = refreshToken;
    localStorage.setItem("refresh_token", refreshToken);
  },
};

export const actions = {
  async refreshToken({ commit }) {
    // Logic to fetch new access token using refresh token
    // Replace with your API call and response handling
    const response = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: state.refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      commit("setToken", data.accessToken);
      return data.accessToken; // Can be used for immediate action
    } else {
      // Handle refresh token failure: logout, refresh token error etc.
      console.error("Refresh token failed!");
      // ...
    }
  },

  async callApi({ commit, getters }, requestConfig) {
    try {
      const response = await fetch(requestConfig.url, {
        headers: { Authorization: `Bearer ${getters.token}` },
        ...requestConfig, // include rest of request config options
      });

      if (response.ok) {
        return response.json(); // Handle successful response
      } else if (response.status === 401) {
        await commit("refreshToken");
        // Retry the original request with the new token
        return this.callApi(requestConfig); // Use same context for retry
      } else {
        // Handle other errors
      }
    } catch (error) {
      // Handle network or other errors
    }
  },
};

export const getters = {
  token: (state) => state.token,
};
