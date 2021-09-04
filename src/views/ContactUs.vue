<template>
  <div class="container">
    <div class="mt-5">
      <h2 class="text-center">How can we help?</h2>
    </div>

    <div class="mt-5 row">
      <div class="col-md-9 mb-3"><LocationMap class="travel-map" /></div>
      <div class="col-md-3">
        <h4 class="text-uppercase">head office</h4>
        <address>
          301, 3rd Floor<br />Imperial Terraces<br />
          Tygervalley Waterfront<br />Bellville<br />
          Cape Town, 7530
        </address>
      </div>
    </div>

    <hr />

    <div class="mt-4 mb-4">
      <div class="row">
        <div class="col-md-2">
          <h3>Get In Touch</h3>
        </div>
        <div class="offset-md-1 col-md-9">
          <div class="row mt-2 ms-3">
            <div class="col-md-5">
              <div class="row mb-2">
                <div class="col-md-9">
                  <h5>General Enquiries</h5>
                  <ul class="ms-3">
                    <li>
                      <font-awesome-icon class="icon" :icon="['fa', 'phone']" />
                      <span class="ms-2">(021) 700 4800</span>
                    </li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'phone']"
                      /><span class="ms-2">087 820 2090</span>
                    </li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'fax']"
                      /><span class="ms-2">(021) 700 4802</span>
                    </li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'envelope']"
                      />
                      <a
                        class="ms-2 link-secondary"
                        href="mailto:support@sharenet.co.za"
                        >support@sharenet.co.za</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-9">
                  <h5>Support</h5>
                  <ul class="ms-3">
                    <li>
                      <font-awesome-icon class="icon" :icon="['fa', 'phone']" />
                      <span class="ms-2">(021) 700 4800 / option 1</span>
                    </li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'envelope']"
                      />
                      <a
                        class="ms-2 link-secondary"
                        href="mailto:support@sharenet.co.za"
                        >support@sharenet.co.za</a
                      >
                    </li>
                    <li class="mt-1">
                      Technical support is available from 8am to 5pm.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3 ms-3">
            <div class="col-md-5">
              <div class="row mb-2">
                <div class="col-md-9">
                  <h5>Sales</h5>
                  <ul class="ms-3">
                    <li>
                      <font-awesome-icon class="icon" :icon="['fa', 'phone']" />
                      <span class="ms-2">(021) 700 4828 / 38</span>
                    </li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'envelope']"
                      />
                      <a
                        class="ms-2 link-secondary"
                        href="mailto:sales@sharenet.co.za"
                        >support@sharenet.co.za</a
                      >
                    </li>
                  </ul>
                  <h5 class="mt-2">Jerome Wyngaard</h5>
                  <ul class="ms-3">
                    <li>National Sales Manager</li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'envelope']"
                      />
                      <a
                        class="ms-2 link-secondary"
                        href="mailto:jerome@sharenet.co.za"
                        >jerome@sharenet.co.za</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-9">
                  <h5>Accounts</h5>
                  <ul class="ms-3">
                    <li>
                      <font-awesome-icon class="icon" :icon="['fa', 'phone']" />
                      <span class="ms-2">(021) 700 4800 / option 4</span>
                    </li>
                    <li>
                      <font-awesome-icon
                        class="icon"
                        :icon="['fa', 'envelope']"
                      />
                      <a
                        class="ms-2 link-secondary"
                        href="mailto:accounts@sharenet.co.za"
                        >accounts@sharenet.co.za</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import LocationMap from "@/components/LocationMap.vue";

export default {
  name: "Contact Us",
  components: {
    LocationMap,
  },
};
</script>

<style lang="scss" scoped>
.travel-map {
  height: 400px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

a:link {
  text-decoration: none;
}

a:hover {
  color: #60a5fa;
}

.icon {
  color: #9ca3af;
}
</style>
