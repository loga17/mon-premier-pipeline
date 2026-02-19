// ============================================
// NOTRE PREMIER PROGRAMME DE TEST !
// ============================================

console.log("🧪 DÉBUT DES TESTS");
console.log("==================");

// ============================================
// ÉTAPE 1 : On crée nos fonctions à tester
// ============================================

// Une fonction qui additionne deux nombres
function addition(a, b) {
  return a + b + 1;
}

// Une fonction qui soustrait deux nombres
function soustraction(a, b) {
  return a - b;
}

// Une fonction qui multiplie deux nombres
function multiplication(a, b) {
  return a * b;
}

// ============================================
// ÉTAPE 2 : On prépare le compteur de tests
// ============================================

let testsReussis = 0;
let testsTotal = 0;

// ============================================
// ÉTAPE 3 : On écrit nos tests
// ============================================

// ----- TEST 1 : L'addition -----
testsTotal++;
console.log("\n📝 Test 1 : addition(2, 3)");

if (addition(2, 3) === 5) {
  console.log("   ✅ RÉUSSI : 2 + 3 = 5");
  testsReussis++;
} else {
  console.log("   ❌ ÉCHEC : 2 + 3 devrait être 5 mais retourne", addition(2, 3));
}

// ----- TEST 2 : La soustraction -----
testsTotal++;
console.log("\n📝 Test 2 : soustraction(10, 4)");

if (soustraction(10, 4) === 6) {
  console.log("   ✅ RÉUSSI : 10 - 4 = 6");
  testsReussis++;
} else {
  console.log("   ❌ ÉCHEC : 10 - 4 devrait être 6 mais retourne", soustraction(10, 4));
}

// ----- TEST 3 : La multiplication -----
testsTotal++;
console.log("\n📝 Test 3 : multiplication(3, 4)");

if (multiplication(3, 4) === 12) {
  console.log("   ✅ RÉUSSI : 3 × 4 = 12");
  testsReussis++;
} else {
  console.log("   ❌ ÉCHEC : 3 × 4 devrait être 12 mais retourne", multiplication(3, 4));
}

// ----- TEST 4 : Un test qui échouera plus tard -----
testsTotal++;
console.log("\n📝 Test 4 : addition(5, 7)");

if (addition(5, 7) === 12) {
  console.log("   ✅ RÉUSSI : 5 + 7 = 12");
  testsReussis++;
} else {
  console.log("   ❌ ÉCHEC : 5 + 7 devrait être 12 mais retourne", addition(5, 7));
}

// ============================================
// ÉTAPE 4 : On affiche le résumé
// ============================================

console.log("\n==================");
console.log(`📊 RÉSULTAT : ${testsReussis}/${testsTotal} tests réussis`);

// ============================================
// ÉTAPE 5 : On décide si tout va bien
// ============================================

if (testsReussis === testsTotal) {
  console.log("\n🎉 FÉLICITATIONS ! Tous les tests sont verts !");
  console.log("   Le pipeline va devenir VERT ✅");
  process.exit(0);  // 0 = tout va bien
} else {
  console.log("\n😱 OH NON ! Certains tests ont échoué !");
  console.log("   Le pipeline va devenir ROUGE ❌");
  process.exit(1);  // 1 = erreur
}