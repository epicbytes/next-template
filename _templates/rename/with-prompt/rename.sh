#!/bin/bash

mv "$PWD/src/components/$1/$2" "$PWD/src/components/$1/$3";

find "$PWD/src/components/$1/$3" -type f -name "*" | while read FILENAME ; do
	from_component_pascal="$(echo "$2" | gsed -E 's#(^|_|-| )([a-z])#\U\2#g')"
	to_component_pascal="$(echo $3 | gsed -E 's#(^|_|-| )([a-z])#\U\2#g')"

	from_component_kebab="$(echo $2 | gsed -E 's#(_|-| )([a-z])#\-\L\2#g')"
	to_component_kebab="$(echo $3 | gsed -E 's#(_|-| )([a-z])#\-\L\2#g')"

	gsed -i "s#${from_component_kebab}#${to_component_kebab}#g" "${FILENAME}"
	gsed -i "s#${from_component_pascal}#${to_component_pascal}#g" "${FILENAME}"

	NEW_FILENAME="$(echo ${FILENAME} | sed -e "s#$2\.#$3\.#g")";

	mv "${FILENAME}" "${NEW_FILENAME}";
done

