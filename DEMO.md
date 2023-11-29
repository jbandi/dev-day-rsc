### Preparation:

Prepare for initial client-side rendering:

- `page.tsx` -> `import { PageLayout } from "@/app/ClientPageLayout";`
- `api/fetchData.ts` -> comment in initial demo code / comment out db access

=> Test that `HelloWorld.tsx` is rendering client side ...



# React is Easy

- Show HelloWorld component
- Show that JS for rendering is sent to the client 



You want data:

```
<p>{data}</p>
```



Add data fetching:

```typescript
let data = "Loading ...";
fetchData().then((d) => {
  console.log(d);
  data = d;
});
```

Oh my ... complexity:

```typescript
const [data, setData] = useState("Loading ...");

useEffect(() => {
  fetchData().then((data) => {
    setData(data);
  });
});
```

-> same in Angular or Vue ... same with RxJS ...

**Secretly switch import of `PageLayout`in `page.tsx` and implementation in `fetchData.ts`...**

What if I told you everything you know about Frontend Development is wrong?

```typescript
  const data = await fetchData();
```

-> `async`component



### Thou shalt build APIs

- Show DB, change Record in DB, Reload Frontend
- Show `fetchData`  -> No API! Just a function call ...
- Show that JS for rendering is not even sent to the client (difference to traditional SSR).



# Form Demo

Extend `HelloWorld.tsx`

```
<FormDemo initalMessage={data.text} />
```

- Show Interactivity
- Show rendering code is loaded in the client - add log statement
- **Show passing pros === passing data from server to client**



# List Demo

Extend `FormDemo.tsx`

```ts
  function handleSubmit() {
    myAction(message);
  }
```

and

```
 <form action={handleSubmit} 
```



- Show DB



Extend `HelloWorld.tsx`

```
  <ListDemo />
```



- UI does not refresh ...

  

Refreshing the UI:

```typescript
import { useRouter } from "next/navigation";
let router = useRouter();

async function handleSubmit() {
  await myAction(message);
}
```

- it is still a SPA => fine-grained DOM Manipulation
- show RSC Payload in POST-GET Calls

Even better:

In `action.ts`

```typescript
revalidatePath("/");
```

- POST returns RSC Payload

# Chart Demo

Extend `HelloWorld.tsx`

```
  <ChartDemo />
```

- Schow `node_modules/d3` and `node_modules/date-fns` are in the `page.js` bundle.
  => Client Component



Remove `'use client'` from `HelloWorld.tsx`

- D3 and date-fns is not in the bundel any more!
