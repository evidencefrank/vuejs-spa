<template>
  <div class="row">
    <div class="col-md-3">
      <select
        class="form-select"
        @change="onCurrencyChange($event)"
        v-model="selectedCurrency"
      >
        <option
          v-for="option in currencyOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>

  <div v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later.
    </p>
  </div>

  <div v-else>
    <div v-if="loading" class="text-center">Loading...</div>

    <div v-else class="mt-3 table-responsive">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th :class="sortedClass('name')" @click="sortBy('name')">Name</th>
            <th :class="sortedClass('symbol')" @click="sortBy('symbol')">
              Symbol
            </th>
            <th
              :class="sortedClass('current_price')"
              class="text-end"
              @click="sortBy('current_price')"
            >
              Price
            </th>
            <th
              :class="sortedClass('price_change_percentage_1h_in_currency')"
              class="text-center"
              @click="sortBy('price_change_percentage_1h_in_currency')"
            >
              1h move
            </th>
            <th
              :class="sortedClass('market_cap')"
              @click="sortBy('market_cap')"
              class="text-end"
            >
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          <tr :key="key" v-for="(value, key) in sortedItems">
            <td>{{ key + 1 }}</td>
            <td>
              <img
                class="float-start d-inline-block align-top"
                :src="value.image"
                :alt="value.name"
              />
              <span class="ms-3 text-start">{{ value.name }}</span>
            </td>
            <td>
              <span class="text-center text-uppercase">{{ value.symbol }}</span>
            </td>
            <td class="text-end">
              {{
                accountInSelectedCurrency(
                  selectedCurrencySymbol,
                  value.current_price
                )
              }}
            </td>
            <td
              class="text-center"
              :class="
                percentageStatus(value.price_change_percentage_1h_in_currency)
              "
            >
              {{
                value.price_change_percentage_1h_in_currency.toFixed(2) + "%"
              }}
            </td>
            <td class="text-end">
              {{
                accountInSelectedCurrency(
                  selectedCurrencySymbol,
                  value.market_cap
                )
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "coin-table",
  data: () => ({
    coins: [],
    loading: true,
    errors: [],
    errored: false,
    sort: {
      key: "",
      isAsc: false,
    },
    selectedCurrency: "usd",
    selectedCurrencySymbol: "$",
    currencyOptions: [
      { text: "USD", value: "usd", symbol: "$" },
      { text: "ZAR", value: "zar", symbol: "ZAR " },
    ],
  }),

  computed: {
    sortedItems() {
      const list = this.coins.slice();
      if (this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }

      return list;
    },

    accountInSelectedCurrency() {
      return (sign, value) => {
        return (
          sign +
          value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      };
    },

    percentageStatus() {
      return (value) => {
        if (value < 0) {
          return "percentage-red";
        } else return "percentage-green";
      };
    },
  },

  mounted() {
    this.getCoinData();
  },

  methods: {
    sortedClass(key) {
      return this.sort.key === key
        ? `sorted ${this.sort.isAsc ? "asc" : "desc"}`
        : "";
    },

    sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },

    onCurrencyChange(event) {
      let sign = event.target.value;
      let valObj = this.currencyOptions.filter(function (elem) {
        if (elem.value == sign) return elem.text;
      });

      if (valObj.length > 0) {
        this.selectedCurrencySymbol = valObj[0].symbol;
      }

      this.getCoinData();
    },

    getCoinData() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.selectedCurrency}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h`
        )
        .then((response) => {
          this.coins = response.data;
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  white-space: nowrap;
  th.sorted {
    &.asc::after {
      display: inline-block;
      content: "▼";
    }
    &.desc::after {
      display: inline-block;
      content: "▲";
    }
  }
  td > img {
    width: 18px;
    max-height: 18px;
    overflow: hidden;
  }

  tr > td {
    width: 20px !important;
    white-space: nowrap !important;
  }
}

.percentage-red {
  color: #e15241;
}

.percentage-green {
  color: #4eaf0a;
}
</style>
