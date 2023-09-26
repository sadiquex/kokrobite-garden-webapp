import { createElement as $ } from "react";
import { H1 } from "./_ui/styles/dsystem/textSystem";

export default function Home() {
  return $("main", null, $(H1, null, `This is the '/' page`));
}
