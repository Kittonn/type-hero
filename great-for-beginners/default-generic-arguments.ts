type ApiRequest<T, Y = "GET"> = {
  data: T;
  method: Y;
};

type TSConfig<T = { strict: true }> = T;
