import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters(["tip", "moduleTip"])
  },
  methods: {}
};
