export default function Table() {
  return (
    <>
      <div class="overflow-auto rounded-lg shadow hidden md:block">
        <table class="w-full">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
              <th class="p-3 text-sm font-semibold tracking-wide text-left">URL</th>
              <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="bg-white">
              <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="#" class="font-bold text-blue-500 hover:underline">
                  10001
                </a>
              </td>
              <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
              <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="#" class="font-bold text-blue-500 hover:underline">
                  10001
                </a>
              </td>
              <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
              <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
